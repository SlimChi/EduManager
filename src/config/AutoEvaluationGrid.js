import React from 'react';
import styled from 'styled-components';

const EvaluationContainer = styled.div`
  font-family: 'Segoe UI', sans-serif;
  width: 100%;
  color: #010d28;
`;

const EvaluationCard = styled.div`

`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.7rem;
  font-weight: bold;
  padding-bottom: 8px;
  letter-spacing: 0.5px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeader = styled.th`
  padding: 12px;
  text-align: center;
  font-size: 0.95rem;
  font-weight: 600;
  background-color: #f5f5f5;
  border-bottom: 2px solid #ccc;
`;

const TableCell = styled.td`
  padding: 14px 12px;
  font-size: 0.92rem;
  border-bottom: 1px solid #eee;
  vertical-align: top;
  background-color: #fff;
`;

const CircleCell = styled.td`
  text-align: center;
  font-size: 1.3rem;
  padding: 14px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
`;

const TableRow = styled.tr`
  &:hover td {
    background-color: #f9f9f9;
  }
`;

const LevelRowHeader = styled.tr`
  background-color: #f0f0f0;

  th {
    border-bottom: 1px solid #ccc;
  }
`;


const AutoEvaluationGrid = ({
                                skills = [
                                    {
                                        name: "S'approprier",
                                        description: "J'identifie correctement les informations utiles du problème et l'inconnue."
                                    },
                                    {
                                        name: "Analyser / Raisonner",
                                        description: "Je traduis la situation en une équation du premier degré avec une inconnue."
                                    },
                                    {
                                        name: "Réaliser",
                                        description: "Je résous correctement l'équation en suivant les étapes de calcul."
                                    },
                                    {
                                        name: "Valider",
                                        description: "Je vérifie la solution en l’appliquant au problème et en m’assurant qu’elle est cohérente."
                                    },
                                    {
                                        name: "Communiquer",
                                        description: "Je rédige une réponse claire et complète."
                                    }
                                ]
                            }) => {
    const levels = ['TM', 'BM', 'PM', 'NM']; // Ordre inversé

    return (
        <EvaluationContainer>
            <EvaluationCard>
                <Title>GRILLE D'AUTO-ÉVALUATION</Title>
                <StyledTable>
                    <thead>
                    <tr>
                        <TableHeader>Compétence</TableHeader>
                        <TableHeader>Critère d’évaluation</TableHeader>
                        <TableHeader colSpan={4}>Niveau d’acquisition</TableHeader>
                    </tr>
                    <LevelRowHeader>
                        <TableHeader colSpan={2}></TableHeader>
                        {levels.map(level => (
                            <TableHeader key={level}>{level}</TableHeader>
                        ))}
                    </LevelRowHeader>
                    </thead>
                    <tbody>
                    {skills.map((skill, index) => (
                        <TableRow key={index}>
                            <TableCell><strong>{skill.name}</strong></TableCell>
                            <TableCell>{skill.description}</TableCell>
                            {levels.map(level => (
                                <CircleCell key={level}>⚪</CircleCell>
                            ))}
                        </TableRow>
                    ))}
                    </tbody>

                </StyledTable>
            </EvaluationCard>
        </EvaluationContainer>
    );
};

export default AutoEvaluationGrid;
