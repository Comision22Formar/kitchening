const getAllResto = async () => {
    try {

      const response = await fetch('http://localhost:3000/apis/restaurants');
      const result = await response.json();

      if(result.ok){

        return result.restaurants
      }
      
    } catch (error) {
      console.error
    }
  }

const getResto = async (id) => {
    try {

        const response = await fetch(`http://localhost:3000/apis/restaurants/${id}`);
        const result = await response.json();
  
        if(result.ok){
  
          return result.resto
        }
        
      } catch (error) {
        console.error
      }
}

const getRestoToEdit = async (id) => {
    try {

        const response = await fetch(`http://localhost:3000/apis/restaurants/${id}/edit`);
        const result = await response.json();
  
        if(result.ok){
            console.log(result.resto);

          return result.resto
        }
        
      } catch (error) {
        console.error
      }
}

  export  {
    getAllResto,
    getResto,
    getRestoToEdit
  }