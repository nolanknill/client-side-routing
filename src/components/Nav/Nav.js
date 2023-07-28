export default function Nav({ changePage }) {
    return (
        <ul>
            <li onClick={() => { changePage("") }}>Home</li>
            <li onClick={() => { changePage("about") }}>About Us</li>
        </ul>
    );
}