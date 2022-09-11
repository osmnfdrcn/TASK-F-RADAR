import AppRoutes from './routes/AppRoutes'
import { useEffect } from 'react';
import { Spinner } from './components';
import useTranslations from "./features/i18n/useTranslation";

const App = () => {
  const { init, status: i18nStatus } = useTranslations();

  useEffect(() => {
    (async () => {
      init()
    })()
  }, []);

  return i18nStatus === "loading" ? (
    <p></p>
  ) : (
    <>
      <AppRoutes />
    </>
  );

}

export default App