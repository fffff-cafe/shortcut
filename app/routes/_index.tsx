import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Shortcut" },
    { name: "description", content: "Shotcut link utility site" },
  ];
};

const Index = () => {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexFlow: "column",
          gap: "1rem",
        }}
      >
        <header
          style={{
            alignItems: "center",
            display: "flex",
            flexFlow: "column",
            gap: "1rem",
          }}
        >
          <h1
            style={{
              color: "#ecc",
              fontSize: "2.5rem",
            }}
          >
            Short Cut
          </h1>
        </header>
        <nav
          style={{
            border: "solid 1px #444",
            borderRadius: "1rem",
            padding: "2rem",
          }}
        >
          <p style={{ color: "#666" }}>Links</p>
          <ul>
            {resources.map(({ href, text }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: "#66e",
                    display: "flex",
                    fontSize: "1.5rem",
                    padding: ".5rem",
                    textAlign: "center",
                  }}
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Index;

const dateToString = (date: Date) =>
  date
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", "-");

const tomorrow = (): Date => {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date;
};
const weekLater = (week: number | undefined = 1): Date => {
  const date = new Date();
  date.setDate(date.getDate() + week * 7);
  return date;
};

const resources = [
  {
    href: `https://fffff-cafe.com`,
    text: "FFFFF",
  },
  {
    href: `https://connpass.com/search/?q=&start_from=${dateToString(
      new Date()
    )}&start_to=${dateToString(new Date())}&prefectures=tokyo`,
    text: "Today connpass",
  },
  {
    href: `https://connpass.com/search/?q=&start_from=${dateToString(
      tomorrow()
    )}&start_to=${dateToString(tomorrow())}&prefectures=tokyo`,
    text: "Tomorow connpass",
  },
  {
    href: `https://connpass.com/search/?q=&start_from=${dateToString(
      new Date()
    )}&start_to=${dateToString(weekLater(1))}&prefectures=tokyo`,
    text: "This week connpass",
  },
];
