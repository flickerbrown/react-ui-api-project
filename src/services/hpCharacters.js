import api from "./apiConfig.js"

export const getCharacters = async () => {
  try {
    const response = await api.get("/characters")
    return response.data
  } catch (error) {
    console.error("Get all Characters error: ", error.message)
  }
}

export const getCharacterById = async (id) => {
  try {
    const response = await api.get(`/character/${id}`)
    return response.data
  } catch (error) {
    console.error("Error Getting single Char: ", error.message)
  }
}

export const getAllStudents = async () =>{
  try {
    const response = await api.get("/characters/students")
    return response.data
  } catch (error) {
    console.error("Error: ", error.message)
  }
}

export const getStudentById = async (id) => {
  try {
    const response = await api.get(`/characters/students/${id}`)
    return response.data
  } catch (error) {
    console.error("Error: ", error.message)
  }
}


export const getAllStaff = async () => {
  try {
    const response = await api.get("/characters/staff")
    return response.data
  } catch (error) {
    console.error("Error: ", error.message)
  }
}

export const getStaffById = async (id) => {
  try {
    const response = await api.get(`/characters/staff/${id}`)
    return response.data
  } catch (error) {
    console.error("Error: ", error.message)
  }
}