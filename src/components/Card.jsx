import avatar from "../assets/profile-thumbnail.png";

export default function Card() {

  return (
    <article className="card">
      <header className="card-header">
        <img className="user-avatar" src={avatar} alt="User Avatar" />
        <div className="user-info">
          <div><p className="user-name truncate">Sarah Dole</p>
          </div>
          <div><p className="user-handle truncate">@sarahdole</p></div>
        </div>

      </header>
      <section className="card-content">
        <p>I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found
           this platform. The variety and depth of creativity are astounding!</p>
      </section>
    </article>
  );
}
