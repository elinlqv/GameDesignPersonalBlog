import Link from "next/link";
import getFormattedDate from "../../../lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

/*export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  );
}*/

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  let formattedDate;

  try {
    formattedDate = getFormattedDate(date);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error formatting date: ${error.message}`);
    } else {
      console.error("An unknown error occurred while formatting the date.");
    }
    formattedDate = "Invalid date";
  }

  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1">{formattedDate}</p>
    </li>
  );
}
