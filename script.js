$(function(){
  const tree = $("#widget").dxTreeList({
    "autoExpandAll": true,
    "columns": [
        "position",
        "fullName",
        "email"
    ],
    "dataSource": [
        {
            "id": 1,
            "parentId": 0,
            "fullName": "John Heart",
            "position": "CEO",
            "email": "jheart@dx-email.com"
        },
        {
            "id": 2,
            "parentId": 0,
            "fullName": "Samantha Bright",
            "position": "COO",
            "email": "samanthab@dx-email.com"
        },
        {
            "id": 3,
            "parentId": 1,
            "fullName": "Arthur Miller",
            "position": "CTO",
            "email": "arthurm@dx-email.com"
        },
        {
            "id": 4,
            "parentId": 1,
            "fullName": "Robert Reagan",
            "position": "CMO",
            "email": "robertr@dx-email.com"
        },
        {
            "id": 5,
            "parentId": 2,
            "fullName": "Greta Sims",
            "position": "HR Manager",
            "email": "gretas@dx-email.com"
        }
    ],
    "showRowLines": true
  }).dxTreeList('instance');
  
  $('#button').dxButton({
    text:'iterate all',
    onClick: function() {
  tree.forEachNode(function(n){
    console.log(n.key);
  });
      
    }

  });
  
    $('#button2').dxButton({
    text:'iterate Samantha',
    onClick: function() {
      var sam = tree.getNodeByKey(2);
      tree.forEachNode([sam], function(n){
        console.log(n.key);
      });
      
    }
  });

});