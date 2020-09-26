import { FunctionComponent } from "react";
import Link from "next/link";
import { recipeList, recipe } from "./../../types/recipe";
import StyledHOC from "./../../helper/styled-hoc";
import style from "./style";

type Props = recipe & { className: string };

const SearchCard: FunctionComponent<Props> = ({
  title,
  photo,
  sys: { id },
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/recipe/${id}`}>
        <a title={title}>
          <div>
            <img width="200" alt={photo.title} src={photo.url} />
            <h5>{title}</h5>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default StyledHOC(SearchCard, style);
