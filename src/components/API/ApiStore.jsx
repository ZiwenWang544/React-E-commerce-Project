

export const ApiStore = async(Url) => {
    try{
        const rest = await fetch(Url);
        const restar = await rest.json();
        return restar;
    } catch(error){
        return "errror";
    }

}