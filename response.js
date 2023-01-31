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

// GraphQL queries
const problemDetails = {
  data: {
    question: {
      questionId: "1",
      questionFrontendId: "1",
      title: "Two Sum",
      titleSlug: "two-sum",
      isPaidOnly: false,
      difficulty: "Easy",
      likes: 42784,
      dislikes: 1399,
    },
  },
};

const problemDescription = {
  data: {
    question: {
      content:
        '<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>\n\n<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>\n\n<p>You can return the answer in any order.</p>\n\n<p>&nbsp;</p>\n<p><strong class="example">Example 1:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [2,7,11,15], target = 9\n<strong>Output:</strong> [0,1]\n<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].\n</pre>\n\n<p><strong class="example">Example 2:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,2,4], target = 6\n<strong>Output:</strong> [1,2]\n</pre>\n\n<p><strong class="example">Example 3:</strong></p>\n\n<pre>\n<strong>Input:</strong> nums = [3,3], target = 6\n<strong>Output:</strong> [0,1]\n</pre>\n\n<p>&nbsp;</p>\n<p><strong>Constraints:</strong></p>\n\n<ul>\n\t<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>\n\t<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>\n\t<li><strong>Only one valid answer exists.</strong></li>\n</ul>\n\n<p>&nbsp;</p>\n<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than&nbsp;<code>O(n<sup>2</sup>)&nbsp;</code>time complexity?',
      mysqlSchemas: [],
    },
  },
};
