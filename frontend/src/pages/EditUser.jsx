export default function EditUser() {
  return (
    <div className="edit-user">
      <h1>Modifier l’utilisateur</h1>
      <form className="editUser-form">
        <div className="input-name-firstname">
          <label>
            <p>Nom* :</p>
            <input className="input-name" type="text" name="name" />
          </label>
          <label>
            <p>Prenom* :</p>
            <input className="input-firstanme" type="text" name="firstname" />
          </label>
        </div>
        <label>
          <p>Email* :</p>
          <input className="input-email" type="text" name="mail" />
        </label>
        <label>
          <p>Mot de passe* :</p>
          <input className="input-password" type="text" name="password" />
        </label>
        <label>
          <p>Role* :</p>
          <input className="input-role" type="text" name="role" />
        </label>
        <div className="butons">
          <input className="editUser-submit" type="submit" value="Modifier" />
          <div className="img" />
        </div>
      </form>
    </div>
  );
}
