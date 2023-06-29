export default function AddUser() {
  return (
    <div className="AjoutUser">
      <h1>Ajout d’utilisateur</h1>
      <form className="addUser-form">
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

        <input className="addUser-submit" type="submit" value="Envoyer" />
      </form>
    </div>
  );
}
