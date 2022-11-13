import Table from "react-bootstrap/Table";
import { DeleteBtn, EditBtn } from "../assets/Icons";
import { DeleteData, GetUser } from "../utils/functions";
function Contact({ UptadeEditUser }) {
  const { contactList } = GetUser();
  return (
    <div className="w-50 ">
      <h3 className="text-center">CONTACTS</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Phone Number</th>
            <th>Gender</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {contactList?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.userName}</td>
                <td>{item.phone}</td>
                <td>{item.gender}</td>
                <td>
                  <button onClick={() => DeleteData(item.id)}>
                    <DeleteBtn />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      UptadeEditUser(
                        item?.id,
                        item?.userName,
                        item?.phone,
                        item?.gender
                      )
                    }
                  >
                    <EditBtn />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Contact;
