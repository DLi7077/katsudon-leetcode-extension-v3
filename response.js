const res = {
  status_code: 10,
  lang: "cpp",
  run_success: true,
  status_runtime: "8 ms",
  memory: 10872000,
  question_id: "1",
  elapsed_time: 21,
  compare_result: "111111111111111111111111111111111111111111111111111111111",
  code_output: "",
  std_output: "",
  last_testcase: "",
  expected_output: "",
  task_finish_time: 1675138317367,
  total_correct: 57,
  total_testcases: 57,
  runtime_percentile: 95.75340000000001,
  status_memory: "10.9 MB",
  memory_percentile: 41.14740000000002,
  pretty_lang: "C++",
  submission_id: "888514284",
  status_msg: "Accepted",
  state: "SUCCESS",
};

const err = {
  status_code: 20,
  lang: "cpp",
  run_success: false,
  compile_error: "Line 17: Char 3: error: unknown type name 's'",
  full_compile_error:
    "Line 17: Char 3: error: unknown type name 's'\n};s\n  ^\n1 error generated.",
  status_runtime: "N/A",
  memory: 0,
  question_id: "1",
  task_finish_time: 1675138603489,
  elapsed_time: 0,
  total_correct: null,
  total_testcases: null,
  runtime_percentile: null,
  status_memory: "N/A",
  memory_percentile: null,
  pretty_lang: "C++",
  submission_id: "888516351",
  status_msg: "Compile Error",
  state: "SUCCESS",
};

const solutionLanguage = res.lang;
const solutionCode = res.expected_lang;

const fetchUrl =
  "https://leetcode.com/submissions/detail/runcode_1675136932.7746737_1vMCA8TmMf/check/";

const endsWith_check_ = new RegExp("check/$");
const contains_runcode_ = new RegExp("runcode");

console.log(
  endsWith_check_.test(fetchUrl) && !contains_runcode_.test(fetchUrl)
);
