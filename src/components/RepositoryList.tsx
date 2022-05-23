import { useState, useEffect } from 'react';

import { RepositoryItem } from './RepositoryItem';

import '../styles/repositories.scss';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  language: string;
}

//

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    // fetch('https://api.github.com/orgs/Rocketseat/repos')
    fetch('https://api.github.com/users/gabrieljuniorferrari88/repos')
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
