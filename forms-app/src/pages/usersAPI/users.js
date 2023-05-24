import React, {Component} from "react";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: [],
            total_pages: 0,
            page: 1
        };
    }
    fetchUsers = (pageNumber) => { // pobieranie danych z konkretnej strony
        fetch("https://reqres.in/api/users?page=" + pageNumber)
        .then(res => res.json())
        .then(
            result => {
                this.setState({
                    isLoaded: true,
                    users: result.data,
                    total_pages: result.total_pages
                });
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        );
    }
    componentDidMount() { // jeśli zmieniona strona w stanie to pobier dane
        this.fetchUsers(this.state.page);
    }
    updatePage = (pageNumber) => { // aktualizacja aktualnie wybranej strony
        this.setState( {page: pageNumber}, this.fetchUsers(pageNumber));
    }
    renderPaginationElements = () => { // tworzenie listy z dostępnymi stronami
        let pagination = [];
        for (let i = 1; i <= this.state.total_pages; i++) {
            pagination.push(
                <a className={i == this.state.page ? "btn btn-secondary active" : "btn btn-secondary"} onClick={() => this.updatePage(i)} value={i} key={i}>{i}</a>
            );
        }
        return pagination;
    }
    renderList() { // renderowanie listy użytkowników
            return (this.state.users.map(user => (
                // <div key={user.id}>
                //     <hr />
                //     <p>{user.first_name}</p>
                //     <p>{user.email}</p>
                //     <img key={user.avatar} src={user.avatar} alt="Avatar użytkownika"/>
                //     <hr />
                // </div>
                <div class="card" key={user.id}>
                <img class="card-img-top" src={user.avatar} alt="Card image cap" key={user.avatar}/>
                <div class="card-body">
                <h5 class="card-title">{user.first_name}</h5>
                <p class="card-text">{user.email}</p>
                </div>
                </div>
            )))
    }
    render() {
        if (this.state.error)
        return (<div>Błąd: {this.state.error.message}</div>);
        else if (!this.state.isLoaded)
        return (<div>Ładowanie...</div>);
        else
        return (
            <div>
            <div class="card-group">
            {this.renderList()}
            </div>
            <div class="App">
            <ul>{this.renderPaginationElements()}</ul>
            </div>
            </div>
            )
    }
}
export default Users;