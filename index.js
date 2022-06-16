
let result=document.getElementById('result')
let s=""
let first=true
let gameLeft=true
let arr=[[0,0,0],[0,0,0],[0,0,0]];
for(let i=1;i<4;i++){
    for(let j=1;j<4;j++)
    {
        s=i.toString()+j.toString()
        let posi=document.getElementById(s)
        if(s=="11")
        {
            // posi.style.backgroundColor='red';
            posi.style.borderTop='none';
            posi.style.borderLeft='none';

        }
        if(s=="12")
        {
            // posi.style.backgroundColor='red';
            posi.style.borderTop='none';

        }
        if(s=="13")
        {
            // posi.style.backgroundColor='red';
            posi.style.borderTop='none';
            posi.style.borderRight='none';

        }
        if(s=="21")
        {
            posi.style.borderLeft='none';

        }
        if(s=="23")
        {
            posi.style.borderRight='none';

        }
        if(s=="31")
        {
            posi.style.borderLeft='none';
            posi.style.borderBottom='none';

        }
        if(s=="32")
        {
            posi.style.borderBottom='none';

        }
        if(s=="33")
        {
            posi.style.borderRight='none';
            posi.style.borderBottom='none';

        }

        posi.addEventListener('click',()=>{
            if(gameLeft){
            if(first)
            {
                if(posi.innerHTML=="x" || posi.innerHTML=="0")
                {
                    
                }
                else{
                posi.innerHTML="0";
                arr[i-1][j-1]=1;
                first=false}
            }
            else
            {
                if(posi.innerHTML=="x" || posi.innerHTML=="0")
                {

                }
                else{
                posi.innerHTML="x";
                arr[i-1][j-1]=2;
                first=true}
            }}
            let count1=0;
            let count2=0;
            // diagonal
            if(arr[0][0]==1 && arr[1][1]==1 && arr[2][2]==1)
            {
                alert("O won");
                result.innerHTML="O won"
                console.log("we win");
                gameLeft=false
            }
            else if(arr[0][2]==1 && arr[1][1]==1 && arr[2][0]==1)
            {
                alert("O won");
                result.innerHTML="O won"

                console.log("we win");
                gameLeft=false

            }
            // row
            else if(arr[0][0]==1 && arr[0][1]==1 && arr[0][2]==1)
            {
                alert("O won");
                result.innerHTML="O won"
                console.log("we win");
                gameLeft=false

            }
            else if(arr[1][0]==1 && arr[1][1]==1 && arr[1][2]==1)
            {
                alert("O won");
                result.innerHTML="O won"

                console.log("we win");
                gameLeft=false

            }
            else if(arr[2][0]==1 && arr[2][1]==1 && arr[2][2]==1)
            {
                alert("O won");
                result.innerHTML="O won"

                console.log("we win");
                gameLeft=false

            }
            // column
            else if(arr[0][0]==1 && arr[1][0]==1 && arr[2][0]==1)
            {
                alert("O won");
                result.innerHTML="O won"

                console.log("we win");
                gameLeft=false

            }
            else if(arr[0][1]==1 && arr[1][1]==1 && arr[2][1]==1)
            {
                alert("O won");
                result.innerHTML="O won"

                console.log("we win");
                gameLeft=false

            }
            else if(arr[0][2]==1 && arr[1][2]==1 && arr[2][2]==1)
            {
                alert("O won");
                result.innerHTML="O won"

                console.log("we win");
                gameLeft=false

            }
            

            // diagonal
            if(arr[0][0]==2 && arr[1][1]==2 && arr[2][2]==2)
            {
                alert("X won")
                result.innerHTML="X won"
                console.log("we win");
                gameLeft=false
            }
            else if(arr[0][2]==2 && arr[1][1]==2 && arr[2][0]==2)
            {
                alert("X won")
                result.innerHTML="X won"

                console.log("we win");
                gameLeft=false

            }
            // row
            else if(arr[0][0]==2 && arr[0][1]==2 && arr[0][2]==2)
            {
                alert("X won")
                result.innerHTML="X won"
                console.log("we win");
                gameLeft=false

            }
            else if(arr[1][0]==2 && arr[1][1]==2 && arr[1][2]==2)
            {
                alert("X won")
                result.innerHTML="X won"
                console.log("we win");
                gameLeft=false

            }
            else if(arr[2][0]==2 && arr[2][1]==2 && arr[2][2]==2)
            {
                alert("X won")
                result.innerHTML="X won"
                console.log("we win");
                gameLeft=false

            }
            // column
            else if(arr[0][0]==2 && arr[1][0]==2 && arr[2][0]==2)
            {
                alert("X won")
                result.innerHTML="X won"
                console.log("we win");
                gameLeft=false

            }
            else if(arr[0][1]==2 && arr[1][1]==2 && arr[2][1]==2)
            {
                alert("X won")
                result.innerHTML="X won"
                console.log("we win");
                gameLeft=false

            }
            else if(arr[0][2]==2 && arr[1][2]==2 && arr[2][2]==2)
            {
                alert("X won")
                result.innerHTML="X won"
                console.log("we win");
                gameLeft=false

            }

        })
    }
}