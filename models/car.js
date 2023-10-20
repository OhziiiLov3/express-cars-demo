const cars = [
  {
    id: 0,
    year: "2020",
    make: "Merecedes",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D",
    isUsed: false,
  },
  {
    id: 1,
    year: "2023",
    make: "Chevorlet",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    isUsed: false,
  },
  {
    id: 2,
    year: "2023",
    make: "Porsche",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
    isUsed: true,
  },
];



const getAll = () =>{
    return cars
}

const getOne = (id) =>{
  id = parseInt(id);
  return cars.find(car => car.id === id)
}



module.exports ={
getAll,
getOne
}

