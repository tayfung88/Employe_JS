let row;

//Creation des agences
    var agence1= new Agence ('Dequalco','Avenue de la liberation','59140','Dunkerque','Ticket restaurant');
    var agence2= new Agence ('AFPA','Rue Leon Blum','62800','Liévin','Restaurant')
    var agence3= new Agence ('IBM', 'Rue des Templiers','59160','Lille','Self')
    
    //Creation des employés
    var employe0= new Employe('Boidin','Diane',"10/30/2013","IT","Développeur",20,agence1,[10,15,18,22] );
    var employe1= new Employe('Boidin','Charles',"10/30/2013","IT","Développeur",20,agence1,[10,15,18,22] );
    var employe2= new Employe ('Boulanger','Eric',"01/29/2015","Cuisine","Patissier",25,agence1,[]);
    var employe3= new Employe ('Virus','Sebastien',"11/15/2022","IT","Hackerman",200,agence2,[]);
    var employe4= new Employe ('Bochu','JM',"12/24/2018","Industrie","Metalurgiste",30,agence2,[]);
    var employe5= new Employe ('Viseurs','Mickael',"09/01/2001","IT","Chef de projet",36,agence3,[21]);
    var employe6= new Employe ('Punga','Andrea',"10/31/2018","IT","Graphiste",28,agence3,[]);
    
    //Création des directeurs
    var directeur1 = new Directeur ('Lesaint','Jérome',"10/10/2009","Direction","Directeur d'Agence",'44',agence2,[])
    
    //Création tableaux d'objets contenants les employés
    var list= [employe0, employe1, employe2, employe3, employe4, employe5, employe6,directeur1]
    
	let masseSalariale=0;
	list.forEach(emp => {
		console.log(emp.pay);
		console.log(emp.prime());
		masseSalariale+=(emp.pay*1000)+parseFloat(emp.prime());
	});
	console.log(masseSalariale);
	
	var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
	  keyboard: false
	})
	
	const table =$('#example').DataTable( {
		data: list,
		columns: [
			{ data:'lastname'},
			{ data:'firstname'},
			{ data:'job'},
			{ data:'pay'},
			{ data:'anciennete()',
			
				render: function ( data, type, row ) {
					if (data==0) {
						return '<span style="color:orange">'+data+'</span>';
					} else {
						return '<span style="color:green">'+data+'</span>';
					}
					
					return data;
				}
			},
			{ data:'agence.name'},
			{ data:'kid.length'}
		]
		
	} );
	
	table.on('click', 'tbody tr', (e) => {
		let tr = e.target.closest('tr');
		row = table.row(tr);
		let emp=row.data();
		document.getElementById('exampleModalLabel').innerText=emp.firstname+' '+emp.lastname;
		document.getElementById('poste').value=emp.job;
		
		myModal.show();
		
		
	});
	
	document.getElementById('btnSave').addEventListener('click',function() {
		var d = row.data();
		d.job=document.getElementById('poste').value;
		row
        .data( d )
        .draw();
		myModal.hide();
	});