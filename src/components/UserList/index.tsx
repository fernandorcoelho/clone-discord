import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Fernando Coelho" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Lucas Cesar Ferreira de Medeiros" isBot />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Fulano" />
      <UserRow nickname="Ciclano" />
      <UserRow nickname="Ciclano" />
      <UserRow nickname="Ciclano" />
      <UserRow nickname="Ciclano" />
      <UserRow nickname="Ciclano" />
      <UserRow nickname="Ciclano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Beltrano" />
      <UserRow nickname="Beltrano" />
    </Container>
  );
};

export default UserList;
