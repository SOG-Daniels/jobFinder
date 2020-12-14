<?php

?>
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>Job Finder</title>

  <!-- Bootstrap -->
  <!-- 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script> -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="main.css">
  <!--     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous"> -->

  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) 
  <script src="main.js"></script>-->

  <!-- <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></script> -->
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <!--<script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script> -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
  <!-- <script src="myjQuery.js"></script>
  <script>
    var system = new System(JSON.parse(localStorage.getItem('SystemObjectData')));
    var user = JSON.parse(localStorage.getItem('User'));
    console.log(user);
    user = new User(JSON.parse(localStorage.getItem('User')));
    console.log("system:");
    console.log(system);
    system.setUser(user);
    localStorage.setItem('SystemObjectData', JSON.stringify(system));

    var userInfo = user.getInfo();
    var allPosts = system.getAllPosts();
  </script>-->
</head>

<nav class="navbar navbar-expand-lg navbar-dark bg-blue">
  <a class="navbar-brand" id="userProfileIcon">
       <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40"
        height="40" class="rounded-circle">
  </a>
  <!-- start of notification dropdown -->
  <div class="dropdown-menu-right">
    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
      aria-expanded="false">
      <span class="badge badge-danger ml-2">3</span>
      <i class="fa fa-bell fa-lg" style="color:antiquewhite;"></i>
    </a>

    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <div class="dropdown-item" href="#">
        <div>
          <a href="#" class="btn btn-link">
            <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40"
              height="40" class="rounded-circle">
          </a>
          <a href="#" class="btn btn-link color-black" id="">John Doe</a>
        </div>
        <div class="mt-2 offset-2">
          is requesting the <span>Yard work</span>
        </div>
        <div class="d-flex justify-content-end">
          <a href="#" class="btn btn-light bg-darkish-blue mr-2">Accept</a>
          <a href="#" class="btn btn-danger">Reject</a>
        </div>
      </div>
      <hr>
      <span class="dropdown-item" href="#">
        Please review <span>Mike Doe</span> <a href="#" class="btn btn-link pb-2 ">Review</a>
      </span>
      <hr>
      <div class="dropdown-item">
        <span>
          Please Confirm payment from <span><a href="#">John Doe</a></span>
        </span>
        <div class="d-flex justify-content-end">
          <a href="#" class="btn btn-light bg-darkish-blue mr-2">Yes</a>
          <a href="#" class="btn btn-light bg-darkish-blue">No</a>
        </div>

      </div>
      <hr>
      <span class="dropdown-item text-center"><a href="#" class="btn btn-link">View all</a></span>
    </div>
  </div>
  <!-- dripdown end -->
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <!-- Content that belongs in the alert -->
    <ul class="navbar-nav ml-auto nav-flex-icons">
      <li class="nav-item dropdown">
      </li>
    </ul>
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link " href="home.html"><i class="fa fa-home"></i> Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="myVacancies.html"><i class="fa fa-th-list"></i> My Vacanies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" data-toggle="modal" data-target="#post"><i class="fa fa-plus"></i> Post Vacancy</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="myWorkHistory.html"><i class="fa fa-th-list"></i> My Work History</a>
      </li>
      <hr class="bg-light">
      <li class="nav-item">
        <a class="nav-link" href="#" id="profilePage"><i class="fa fa-user"></i> Profile</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="index.html"><i class="fa fa-sign-out"></i> Sign out</a>
      </li>
    </ul>

  </div>
</nav>

<body class="bg-light-blue">
  <!-- Modal to post a vacany -->
  <div class="modal fade" id="post" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-darkish-blue">
          <h5 class="modal-title " id="exampleModalLongTitle">Post a Vacancy</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>

            <div class="form-group">
              <label for="title">Title <span class="require">*</span></label>
              <input type="text" class="form-control" name="title" id="title">
            </div>

            <div class="form-group">
              <label for="description">Description</label>
              <textarea rows="5" class="form-control" name="description" id="description"></textarea>
            </div>

            <div class="form-group">
              <label for="estimatedTime">Estimated Time: <span class="require">*</span></label>
              <input type="text" class="form-control" name="title" id="estimatedTime">
            </div>

            <div class="form-group">
              <label for="availableDate">Availale Date: <span class="require">*</span></label>
              <input type="text" class="form-control" name="title" id="availableDate">
            </div>

            <div class="form-group">
              <label for="availableTime">Availale Time: <span class="require">*</span></label>
              <input type="text" class="form-control" name="title" id="availableTime">
            </div>

            <div class="form-group">
              <label for="payment">Payment: <span class="require">*</span></label>
              <input type="text" class="form-control" name="title" id="payment">
            </div>

            <div class="form-group">
              <label for="location">Location: <span class="require">*</span></label>
              <input type="text" class="form-control" name="title" id="location">
            </div>
            <div class="form-group row">
              <div class="col-6">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              </div>
              <div class="col-6 d-flex justify-content-end">
                <button type="button" class="btn btn-light bg-darkish-blue" data-dismiss="modal" data-toggle="modal"
                  data-target="#success" id="postData">Post</button>
              </div>
            </div>
        </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Success Modal -->
  <div class="modal" id="success" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-darkish-blue">
          <h5 class="modal-title" style="text-align: center;">SUCCESS</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p id="success-content" style="text-align: center;">Post was sent!</p>
          <div class="form-group">
            <button type="button" class="btn btn-light bg-darkish-blue float-right" data-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- modal for when info is clicked -->
  <div class="modal fade" id="show-info" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header bg-darkish-blue">
          <span class="form-group">
            <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40"
              height="40" class="rounded-circle">
            <a href="#" class="btn btn-link color-black" id=""><u id="userName">User Name</u></a>
          </span>
          <span class="btn btn-light float-right bg-darkish-blue"><i class="fa fa-comments-o fa-2x"></i></span>
        </div>
        <div class="modal-body">
          <div class="row d-flex justify-content-center">
            <div class="col-8">
              <div class="row">
                <div class="col-7 col-md-8">
                  <label for="Job Title" class="font-weight-bold ">Job: </label>
                </div>
                <div class="col-5 col-md-4">
                  <p id="jobDone">Yard Work</p>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <label for="Job Description" class="font-weight-bold ">Job Description: </label>
                </div>
                <div class="row justify-content-center">
                  <div class="col-10">
                    <p id="job-description">I want you too cut my yard and rake the whole yard that is amlost 1 acre</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-7 col-md-8">
                  <label for="time-taken" class="font-weight-bold">Estimated Time: </label>
                </div>
                <div class="col-5 col-md-4">
                  <p id="time-taken">3 Hrs</p>
                </div>
              </div>
              <div class="row">
                <div class="col-7 col-md-8">
                  <label for="time" class="font-weight-bold">Available Time: </label>
                </div>
                <div class="col-5 col-md-4">
                  <p id="time">8:00 AM</p>
                </div>
              </div>
              <div class="row">
                <div class="col-7 col-md-8">
                  <label for="date" class="font-weight-bold">Available Date: </label>

                </div>
                <div class="col-5 col-md-4">
                  <p id="date">24/10/2019</p>
                </div>
              </div>
              <div class="row">
                <div class="col-7 col-md-8">
                  <label for="location" class="font-weight-bold">Location: </label>
                </div>
                <div class="col-5 col-md-4">
                  <p id="street">14 Tucan Str.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 form-group">
              <button type="button" class="btn btn-secondary" style="text-align: center;"
                data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal ends -->
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-6">
            <form action="" class="search-form">
              <div class="form-group input-group mb-3 has-feedback">
                <label for="search" class="sr-only">Search</label>
                <input type="text" class="form-control rounded-left" name="search" id="search" placeholder="search"
                  autocomplete="off">
                <span class="input-group-append">
                  <i class="input-group-text fa fa-search fa-lg"></i>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card-columns" id="cardColumn">
            </div>
          </div>
        </div>
      </div>

    <!--  <script>
        //load posts

        for (let index = 0; index < allPosts.length; index++) {
          if (allPosts[index][1] != userInfo[0][0]) {
            //create new card
            var cardColumn = document.getElementById("cardColumn");
            //card
            var card = document.createElement("div");
            card.setAttribute("class", "card");
            card.setAttribute("id", allPosts[index][0].toString() + "*" + allPosts[index][1].toString());
            //hard header
            var cardHeader = document.createElement("div");
            cardHeader.setAttribute("class", "card-header");
            var userImage = document.createElement("img");
            userImage.setAttribute("src", "https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg");
            userImage.setAttribute("class", "rounded-circle");
            userImage.width = "40";
            userImage.height = "40";
            cardHeader.appendChild(userImage);
            var userNameLink = document.createElement("a");
            userNameLink.setAttribute("class", "btn btn-link color-black");

            var r = userInfo[0][0].toString();
            userNameLink.href = "./profile.html?userId=" + allPosts[index][1].toString();
            var userName = document.createElement("u");
            userName.innerHTML = system.getUserNameById(allPosts[index][1]);
            userNameLink.appendChild(userName);
            cardHeader.appendChild(userNameLink);

            var spanMessage = document.createElement("span");
            spanMessage.setAttribute("class", "btn btn-light float-right bg-darkish-blue");
            var messageIcon = document.createElement("i");
            messageIcon.setAttribute("class", "fa fa-comments-o fa-2x");
            spanMessage.appendChild(messageIcon);
            cardHeader.appendChild(spanMessage);
            card.appendChild(cardHeader);
            //card body
            var cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body");
            var cardTitle = document.createElement("h4");
            cardTitle.setAttribute("class", "card-title");
            cardTitle.innerHTML = allPosts[index][2];
            cardBody.appendChild(cardTitle);
            var hr = document.createElement("hr");
            cardBody.appendChild(hr);
            var jobDescriptionLabel = document.createElement("label");
            jobDescriptionLabel.setAttribute("for", "jobDescription")
            jobDescriptionLabel.setAttribute("class", "font-weight-bold")
            jobDescriptionLabel.innerHTML = "Job Description:";
            cardBody.appendChild(jobDescriptionLabel);
            var jobDescription = document.createElement("p");
            jobDescription.setAttribute("class", "card-text");
            jobDescription.innerHTML = allPosts[index][3];
            cardBody.appendChild(jobDescription);
            var PaymentLabel = document.createElement("label");
            PaymentLabel.setAttribute("for", "Payment")
            PaymentLabel.setAttribute("class", "font-weight-bold")
            PaymentLabel.innerHTML = "Payment:";
            cardBody.appendChild(PaymentLabel);
            var payment = document.createElement("p");
            payment.setAttribute("class", "card-text");
            payment.innerHTML = '$' + allPosts[index][4].toString();
            cardBody.appendChild(payment);
            var locationLabel = document.createElement("label");
            locationLabel.setAttribute("for", "location");
            locationLabel.setAttribute("class", "font-weight-bold");
            locationLabel.innerHTML = "Location:";
            cardBody.appendChild(locationLabel);
            var lc = document.createElement("p");
            lc.setAttribute("class", "card-text");
            lc.innerHTML = allPosts[index][5];
            cardBody.appendChild(lc);
            var infoLink = document.createElement("a");
            infoLink.setAttribute("class", "btn btn-light rounded info bg-darkish-blue infoLink");
            infoLink.setAttribute("data-toggle", "modal");
            infoLink.setAttribute("data-target", "#show-info");
            var infoIcon = document.createElement("i");
            infoIcon.setAttribute("class", "fa fa-info fa-lg");
            infoLink.appendChild(infoIcon);
            cardBody.appendChild(infoLink);
            var apply = document.createElement("button");
            apply.setAttribute("class", "btn btn-light float-right bg-darkish-blue Apply");
            apply.setAttribute("data-toggle", "modal");
            apply.setAttribute("data-target", "#success");

            if(system.applied(allPosts[index],userInfo[0][0]))
            {
              apply.setAttribute("disabled","true");
              apply.innerHTML = "Applied";
            }
            else
              apply.innerHTML = "Apply Now";

            cardBody.appendChild(apply);
            card.appendChild(cardBody);
            cardColumn.appendChild(card);
          }
        }

        $(".Apply").click(function (e) {

          /*Apply functionality
          *disable the apply button
          *send a notification to the user of the post
          *if accepted send notification to applier
          *add job post to active jobs
          */
          let target = e.target;
          target.innerHTML = "Applied";
          target.setAttribute("disabled", "true");

          let parent = e.target.closest('.card').cloneNode(true);
          let parentId = parent.id;

          let ID = parentId.split('*');
          //IDs[0] -> postID IDs[1] -> userId
          let postId = parseInt(ID[0]);
          let userId = parseInt(ID[1]);
          let currentUserId = userInfo[0][0];

          system.applyForJob(postId, userId, currentUserId);
          localStorage.setItem('SystemObjectData', JSON.stringify(system));
          localStorage.setItem('User', JSON.stringify(system.getUser()));

          console.log(system);
          console.log(user);
          /*
        system = system.addUserActiveJobs(system.getPostAt(postId));

        var cardToDelete = document.getElementById(parentId);
        document.getElementById("cardColumn").removeChild(cardToDelete);
        localStorage.setItem('SystemObjectData', JSON.stringify(system));
        localStorage.setItem('User', JSON.stringify(system.getUser()));*/
        });

        $('#postData').click(function () {

          let title = $('#title').val();
          let description = $('#description').val();
          let estimatedTime = $('#estimatedTime').val();
          let availableDate = $('#availableDate').val();
          let availableTime = $('#availableTime').val();
          let payment = $('#payment').val();
          let loca = $('#location').val();
          console.log(title + " " + description + " " + estimatedTime + " " + availableDate + " " + availableTime + " " + payment + " " + loca);
          let newPost = [
            allPosts.length,//post id
            userInfo[0][0],//user id
            title,//title
            description,//description
            payment,//payment
            loca,//location
            estimatedTime,//hours
            availableTime,//avaialble time
            availableDate,//AVIALABLE DATE
          ];
          system.createPost(newPost);
          console.log("post created");
          console.log(system);
          localStorage.setItem('SystemObjectData', JSON.stringify(system));
          localStorage.setItem('User', JSON.stringify(system.getUser()));
        });

        $(".infoLink").click(function(e){
          console.log(e);
          let parent = e.target.closest(".card");
          let parentId = parent.id;

          let ID = parentId.split('*');
          //IDs[0] -> postID IDs[1] -> userId
          let postId = parseInt(ID[0]);
          let userId = parseInt(ID[1]);
          let post = system.getPostAt(postId);
          console.log(post);

          let tempEl = document.getElementById("userName");
          tempEl.innerHTML = system.getUserNameById(userId);
          tempEl = document.getElementById("jobDone");
          tempEl.innerHTML = post[2];

          tempEl = document.getElementById("job-description");
          tempEl.innerHTML = post[3];

          tempEl = document.getElementById("time-taken");
          tempEl.innerHTML = post[6];

          tempEl = document.getElementById("time");
          tempEl.innerHTML = post[7];

          tempEl = document.getElementById("date");
          tempEl.innerHTML = post[8];

          tempEl = document.getElementById("street");
          tempEl.innerHTML = post[5];          
        });
        var profilePage = document.getElementById("profilePage");
        profilePage.href = "./profile.html?userId=" + userInfo[0][0].toString();
        document.getElementById("userProfileIcon").href = "./profile.html?userId=" + userInfo[0][0].toString();

      </script>

      -->    
</body>
</html>