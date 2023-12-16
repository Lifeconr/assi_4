import './App.css'
function GroupMembers() {
  const names = ['Senait', 'Fasik', 'Yordi', ];

  const nameList = names.map(function (names, index) {
    return <li key={index}>{names}</li>;
  });

  return (
    <div>
      <h2>List of Group Members:</h2>
      <ol>{nameList}</ol>
    </div>
  );
}

export default GroupMembers;