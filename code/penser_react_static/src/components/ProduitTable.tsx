import { Produit } from '../models/Produit.model';
import ProduitCategorieRangee from './ProduitCategorieRangee';
import ProduitRangee from './ProduitRangee';

interface ProduitTableProps {
  produits: Produit[];
}

export default function ProduitTable(props: ProduitTableProps) {
  const produits = props.produits;
  const rangees: JSX.Element[] = [];
  let derniereCategorie: string | null = null;

  produits.forEach((produit) => {
    if (produit.categorie !== derniereCategorie) {
      rangees.push(
        <ProduitCategorieRangee
          categorie={produit.categorie}
          key={produit.categorie}
        />
      );
    }
    rangees.push(<ProduitRangee produit={produit} key={produit.nom} />);
    derniereCategorie = produit.categorie;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>{rangees}</tbody>
    </table>
  );
}
