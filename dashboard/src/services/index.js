const getAllResto = async (page = 1, limit = 5) => {
  try {
    const response = await fetch(`http://localhost:3000/apis/restaurants?limit=${limit}&page=${page}`);
    const result = await response.json();

    if (result.ok) {
      return {
        total : result.meta.total,
        count : result.meta.count,
        pages : result.meta.pages,
        currentPage : result.meta.currentPage,
        restaurants : result.restaurants
      };
    }
  } catch (error) {
    console.error;
  }
};

const getResto = async (id) => {

  try {
    const response = await fetch(
      `http://localhost:3000/apis/restaurants/${id}`
    );
    const result = await response.json();

    if (result.ok) {
      return result.resto;
    }
  } catch (error) {
    console.error;
  }
};

const getRestoToEdit = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/apis/restaurants/${id}/edit`
    );
    const result = await response.json();

    if (result.ok) {
      return result.resto;
    }
  } catch (error) {
    console.error;
  }
};

const getProvinces = async () => {
  try {
    let response = await fetch(
      "https://apis.datos.gob.ar/georef/api/provincias"
    );
    let { provincias } = await response.json();

    return provincias.sort((a, b) =>
      a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0
    );
  } catch (error) {
    console.error;
  }
};

const getCitiesPerProvince = async (province) => {
  try {
    let response = await fetch(
      `https://apis.datos.gob.ar/georef/api/localidades?provincia=${province}&max=1000`
    );
    let { localidades } = await response.json();

    return localidades.sort((a, b) =>
      a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0
    );
  } catch (error) {
    console.error;
  }
};

const getCategories = async () => {
  try {
    let response = await fetch(
      `http://localhost:3000/apis/categories`
    );
    let { categories } = await response.json();

    return categories
  } catch (error) {
    console.error;
  }
};

const storeResto = async (method, data) => {
  try {
    const response = await fetch('http://localhost:3000/apis/restaurants',{
        method,
        body : JSON.stringify(data),
        headers : {
          'Content-Type' : 'application/json'
        }
      });

      const result = await response.json();

      return result
  } catch (error) {
    console.error;
  }
}

const deleteResto = async(id) => {

  try {
    const response = await fetch(`http://localhost:3000/apis/restaurants/${id}`,{
        method : 'DELETE'
      });

    const result = await response.json();

    console.log(result);

      return result
  } catch (error) {
    console.error;
  }
}

export {
  getAllResto,
  getResto,
  getRestoToEdit,
  getProvinces,
  getCitiesPerProvince,
  getCategories,
  storeResto,
  deleteResto
};
