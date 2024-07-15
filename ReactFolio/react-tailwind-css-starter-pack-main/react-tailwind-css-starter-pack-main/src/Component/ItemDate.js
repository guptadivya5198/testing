
function ItemDate(props) {
    const day = props.day;
    const month = props.month;
    const year = props.year;
    return (
        <div className="item-center bg-yellow-500 my-4 text-center">
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    );

}
export default ItemDate;