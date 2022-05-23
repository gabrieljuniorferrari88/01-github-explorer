interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    language: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      <p>
        Linguagem: <strong>{props.repository.language}</strong>
      </p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}
