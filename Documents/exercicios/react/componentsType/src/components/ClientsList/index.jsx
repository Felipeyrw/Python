import withDataFetching from "../HOCComponent";
import '../../App.css'

const ClientList = ({ data: clients }) => {
    return(
        <div>
            <h2>Clients</h2>
            <ul className="list">
                {clients.map((client) => (
                    <li key={client.id}>
                        <p>
                            #{client.id} {client.name}
                            <p>{client.sex}</p>
                            <p>{Intl.DateTimeFormat('en-us').format(new Date(client.birthday))}</p>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const ClientListWithData = withDataFetching("Clients", ClientList, "/smart/clients");
export default ClientListWithData;