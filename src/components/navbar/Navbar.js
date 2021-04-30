

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
                        <li className="list-item"><a href="Schedules">Schedules</a></li>
                        <li className="list-item"><a href="Requests">Requests</a></li>
                        <li className="list-item"><a href="Exceptions">Exceptions</a></li>
                        <li className="list-item"><a href="Payroll">Payroll</a></li>
                        <li className="list-item"><a href="Forcasting">Forcasting</a></li>
                        <li className="list-item"><a href="personnel">personnel</a></li>
                        <li className="list-item"><a href="Logout">Logout</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
