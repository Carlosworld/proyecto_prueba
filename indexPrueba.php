<?php include("db.php");?>
<?php include('header.php');?> 
<body>
<div class="container">
    <div class="table-responsive table-bordered">
        <table class="table">
            <thead>
            <tr>
                <th>Username</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Salary</th>
            </tr>
            </thead>
            <tbody>
            <tr class='tr_input'>
                <td><input type='text' class='username form-control form-control-sm' id='username_1' placeholder='Enter username'></td>
                <td><input type='text' class='name form-control form-control-sm' id='name_1' ></td>
                <td><input type='text' class='age form-control form-control-sm' id='age_1' ></td>
               
            </tr>
            <tr>
             <td><input type='email' class='email form-control form-control-sm' id='email_1' ></td>
                <!-- <td><input type='text' class='salary form-control form-control-sm' id='salary_1' ></td> -->
            </tr>
            </tbody>
        </table>
        <input type='button' value='Add more' id='addmore'>

    </div>
</div>
</body>
</html>

<script type="text/javascript" src="index.js"></script>
<?php include('footer.php');?>  