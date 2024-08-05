export let assistantId = "asst_CJdnwXvtUESBVqIc7MhiHvcq"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
