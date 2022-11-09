function sales(carsSold) {
     let totals={
    Ford: 0,
    Honda:0,
    "Land Rover": 0,
    Toyota:0,
  };
  
  carsSold.map(obj => {
    if(obj.make==='Ford'){
      totals.Ford+=obj.price;
    }else if(obj.make==="Land Rover"){
      totals["Land Rover"]+=obj.price;
    }else if(obj.make==="Toyota"){
      totals.Toyota+=obj.price;
    }else{
      totals.Honda+=obj.price;
    }
  });
  return totals
}

module.exports = sales;
