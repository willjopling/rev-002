import styled from "styled-components";
import ButtonRound from "../../button-round/button-round.component";

export const RecipeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const RecipeTableHeader = styled.tr`
  background: ${({ theme }) => theme.background};
  height: 40px;
`;

export const TableUpdateButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const UpdateTableButton = styled(ButtonRound)`
  border-radius: unset;
  height: 40px;
`;
