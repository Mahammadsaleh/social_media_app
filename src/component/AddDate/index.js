function AddDate({date}) {
    var timeStamp = date;
    var dateFormat= new Date(timeStamp);
    var dataText = (
    " "+dateFormat.getHours()+
    ":"+dateFormat.getMinutes()+
    ":"+dateFormat.getSeconds()+" "+
    dateFormat.getDate()+
    "/"+(dateFormat.getMonth()+1)+
    "/"+dateFormat.getFullYear());
    return (  <div >{dataText}</div> );
}

export default AddDate;