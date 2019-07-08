import "jest";
import { mount } from "@vue/test-utils";
import PostPreview from "@components/PostPreview/PostPreview.vue";

describe("PostPreview", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(PostPreview, {
      propsData: {
        post: {
          id: 1,
          title: "hello",
          description: "test"
        }
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});
