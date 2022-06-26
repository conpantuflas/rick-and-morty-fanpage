
const getState = ({setStore, getActions, getStore}) => {
    return{
        store:{
            characters: [],

            episode: [],

            favoritos:[],

            user:{
                nombree:"",
                nombre_usuario:"",
                email:""
            }
        },
        actions:{
            handleChangeLogin: (e) => {
                const { user } = getStore();
                setStore({
                    user:{
                        ...user,
                        [e.target.name] : e.target.value
                    }
                })
            },

            handleSubmitLogin: (s) => {
                s.preventDefault();

                const { user } = getStore()

                fetch( "http://localhost:5000/un_usuario" , {
                method:"POST",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify( user )
            })
            .then( resp => resp.json() )
            .then( data => console.log(data) )
            },

            consumoDeApiCharacter:()=>{
                    fetch('https://rickandmortyapi.com/api/character')
                    .then(respuesta => respuesta.json())
                    .then(data => {
                        setStore({characters: data.results})
                    })
            },

            consumoDeApiEpisode: ()=>{
                fetch('https://rickandmortyapi.com/api/episode')
                .then(respuesta => respuesta.json())
                .then(data => {
                    setStore({episode: data.results})
                })
            },

            añadirFavorito: (name) => {
                const store = getStore();
                setStore({
                    favoritos: [...store.favoritos, name]
                })
            },

            eliminarFavorito: (i)=>{
                const store = getStore()
                setStore({
                    favoritos: store.favoritos.filter((element, indice)=> i != indice ,i) 
                })
            },

            noRepetidos: ()=>{
                const store = getStore()
                setStore({
                   favoritos: store.favoritos.filter((item,index)=>{
                       return store.favoritos.indexOf(item) === index 
                   })
                })
            },
        }
    }
}
export default getState;