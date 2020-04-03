export default function({error }){
   let userAuth = false
   if(!userAuth){
      error({
         message: 'Iniciar session para ver el contenido',
         statusCode:403
      })
   }
}