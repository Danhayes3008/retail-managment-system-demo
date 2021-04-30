

const Navbar = () => {
    return (
        <div className="nav">
            <nav className="navbar">
                <div className="nav-details">
                    <h3 className="wk-nbr">WK 32</h3>
                    <p className="user">Daniel Hayes</p>
                    <p className="date-time">30-04-2021  10:31</p>
                </div>
                <div className="nav-items">
                    <ul className="nav-list">
                        <li className="list-item">Schedules</li>
                        <li className="list-item">Requests</li>
                        <li className="list-item">Exceptions</li>
                        <li className="list-item">Payroll</li>
                        <li className="list-item">Forcasting</li>
                        <li className="list-item">personnel</li>
                        <li className="list-item">Logout</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
