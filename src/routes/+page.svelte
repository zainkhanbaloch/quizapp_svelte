<script lang="ts">

	type Question = {
		propmt: string;
		answer: string;
		options: string[];
	};

	const myquestions: Question[] = [
		
    {
    prompt: 'What is HTML?',
    answer: 'Hypertext Markup Language',
    options: [
      'A web browser',
      'Hypertext Markup Language',
      'A programming language',
    ],
  },
  {
    prompt: 'What is the purpose of CSS in web development?',
    answer: 'Styling and formatting web content',
    options: [
      'Creating server-side scripts',
      'Managing databases',
      'Styling and formatting web content',
    ],
  },
  {
    prompt: 'What does CPU stand for?',
    answer: 'Central Processing Unit',
    options: [
      'Computer Power Unit',
      'Central Processing Unit',
      'Critical Processing Utility',
    ],
  },
  {
    prompt: 'What is JavaScript primarily used for?',
    answer: 'Adding interactivity to web pages',
    options: [
      'Editing images',
      'Analyzing network traffic',
      'Adding interactivity to web pages',
    ],
  },
  {
    prompt: 'What is the role of a database in software applications?',
    answer: 'Storing and managing data',
    options: [
      'Designing user interfaces',
      'Processing payment transactions',
      'Storing and managing data',
    ],
  },
        
	];

	let currentQuestionIndex: number = 0;
	let currentQuestion: Question;
	$: currentQuestion = myquestions[currentQuestionIndex];
	let marks: number = 0;
	let selected_option: string;
	let isQuizFinished = false;
	function handleSubmit() {
        if (selected_option !== undefined) {
            if (selected_option == currentQuestion.answer) {
                marks++;
                selected_option = undefined;
            }

            if (currentQuestionIndex < myquestions.length - 1) {
                currentQuestionIndex++;
            } else {
                isQuizFinished = true;
            }
        }
	}
	$: {
		console.log(selected_option);
	}

    function handleAttemptAgain(){
        currentQuestionIndex = 0;
        marks = 0;
        isQuizFinished = false;
    }
</script>

{#if !isQuizFinished}
<div class="artboard artboard-horizontal phone-1 bg-neutral text-neutral-content  mx-auto my-10 rounded-lg p-10 h-fit">
	<form on:submit|preventDefault={handleSubmit}>
		<h2 class="text-xl text-center font-bold">Question#{currentQuestionIndex + 1}</h2>
		<p class="text-center ">{currentQuestion.prompt}</p>
		{#each currentQuestion.options as option}
        <div class="form-control artboard artboard-horizontal mx-auto  ">
  <label class="label cursor-pointer bg-primary my-2  w-full rounded-xl space-x-1">
    <input type="radio" id="choice" name="radio-10" class="radio bg-blue-500   radio-info checked:bg-blue-500 ml-5" bind:group={selected_option} value={option} />
    <span class="label-text w-96 text-neutral-content">{option}</span>
  </label>
</div>
		{/each}
        <div class="flex justify-end">
		<button class="btn btn-primary " type="submit">Next</button>
        <div>
	</form>
</div>
{:else}

<div class="card w-96 mx-auto mt-10 bg-primary text-primary-content">
    <div class="card-body">
      <h2 class="card-title">Congrats! Quiz is over</h2>
      <p>Your score is {marks} out of {myquestions.length}</p>
      <div class="card-actions justify-end">
        <button on:click={handleAttemptAgain} class="btn">Attempt Again</button>
      </div>
    </div>
  </div>

	
{/if}
