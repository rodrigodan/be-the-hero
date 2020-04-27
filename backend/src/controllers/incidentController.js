const connection = require('../database/connection')
module.exports = {

    async index(request, response){
        const {page = 1} = request.query;

        const [count] = await connection('incidents').count();
        console.log(count);

        const incidents = await connection('incidents')
        .join('ongs','ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page-1)*5) 
        .select(['incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);
        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);
    },

    async create(request, response){
        // console.log(response.body);
        const {title,description, value} = request.body;
        // os headers guarda informação do contexto da requisição:
        // vem dados da autenticação do usuário
        // vem dados da localização pra quando queremos mostrar uma mensagem em inglês para americans e portuguese para brazilians 
        const ong_id = request.headers.authorization;
        // o result vai armazenar o resultado da requisição
        // essa requisição consiste de ids.
        // como nesse caso estamos armazenando apenas um item, o result vai ser um array com um único dado
        // const result = await connection('incidents').insert({
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({id});
    },

    async delete(request,response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        if(ong_id !== incidents.ong_id){
            return response.status(401).json({error: 'Operation not permitted.'})
        }
        await connection('incidents').where('id',id).delete();
        return response.status(204).send();
    }
}