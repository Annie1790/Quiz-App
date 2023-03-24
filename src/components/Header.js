import "../style/Header.scss"

const Header = ({playerName}) => {
    return (
        <div id="header">
            <p>Hello,</p>
            <h1>{playerName}</h1>
        </div>
    )
};

export default Header;