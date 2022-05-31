
const getState = ({setStore, getActions, getStore}) => {
    return{
        store:{
            counter:0,
            characters: [],
            episode: [],
            favoritos:[],
        },
        actions:{
            incremento: ()=>{
                const store = getStore();
                setStore({
                    counter: store.counter + 1
                })
            },
            decremento: ()=>{
                const store = getStore();
                setStore({
                    counter: store.counter - 1
                })
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