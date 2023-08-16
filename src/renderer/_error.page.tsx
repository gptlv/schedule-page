export { Page }
export const documentProps = {
  title: "Ошибка",
};

function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return (
      <>
        <h1>404 Страница не найдена</h1>
        <p>Такой страницы не существует.</p>
      </>
    )
  } else {
    return (
      <>
        <h1>500 Internal Error</h1>
        <p>Something went wrong.</p>
      </>
    )
  }
}
