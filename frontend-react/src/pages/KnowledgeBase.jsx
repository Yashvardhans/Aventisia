import { useState } from "react";
import Card from "../components/ui/Card";
import SearchInput from "../components/ui/SearchBar";
import Button from "../components/ui/Button";
import Pagination from "../components/ui/Pagination";
import { CustomInput } from "../components/ui/Input/CustomInput";
import { CustomTextArea } from "../components/ui/Input/CustomTextArea";
import { Modal } from "../components/ui/Modal/Modal";
import { Dropdown } from "../components/ui/Dropdown";
import { data } from "../data/knowledge_base";

import { FaPlus } from "react-icons/fa";

const KnowledgeBase = () => {
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    vectorStore: "Qdrant",
    llmModel: "text-embedding-oda-002",
  });


  const handleInputChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleCreate = () => {
    console.log("Form Data:", formData);
    setIsOpen(false);
    setFormData({
      name: "",
      description: "",
      vectorStore: "Qdrant",
      llmModel: "text-embedding-oda-002",
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Knowledge Base</h1>
        <div className="flex gap-2">
          <SearchInput className="rounded-lg bg-white shadow-inner focus-within:ring-2 focus-within:ring-white/40 pl-6 w-50 border border-gray-300 font-400">
            <SearchInput.Slot className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                <circle
                  cx="9"
                  cy="9"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M14 14l4 4" stroke="currentColor" strokeWidth="2" />
              </svg>
            </SearchInput.Slot>
          </SearchInput>
          <Button
            className="gap-2 rounded-lg flex items-center justify-center bg-[#4F46E5] text-white py-2 px-4"
            text="Create New"
            icon={<FaPlus />}
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <div className="h-auto border-2 shadow-[0_2px_2px_0px_rgba(0,0,0,0.2)] border-gray-200 rounded-lg grid grid-cols-3 w-full gap-3 p-3 mt-5">
        {data.map((item, index) => (
          <Card
            key={index}
            header={item.header}
            text={item.text}
            date={item.date}
            className=""
          />
        ))}
      </div>

      <div className="mt-auto">
        <Pagination
          currentPage={page}
          totalPages={5}
          totalRows={6}
          onPageChange={setPage}
        />
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create New Knowledge Base"
        description="Best for quick answers from documents, websites and text files."
        width="550px"
        height="100vh"
        animation="slideRight"
        overlayBlur={true}
        closeButton={false}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto">
            <CustomInput
              label="Name (Cannot be edited later)*"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange("name")}
            />

            <CustomTextArea
              label="Description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange("description")}
              rows={5}
            />

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vector Store<span className="text-red-500">*</span>
              </label>
              <Dropdown
                styles={{
                  root: "relative inline-block w-full",
                  button:
                    "w-full inline-flex items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 transition",
                  contents:
                    "absolute left-0 z-50 mt-2 w-full min-w-44 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg",
                }}
              >
                <Dropdown.Button className="w-full">
                  <span className="text-left flex-1">
                    {formData.vectorStore}
                  </span>
                </Dropdown.Button>
                <Dropdown.Contents>
                  <Dropdown.List>
                    <Dropdown.Item
                      onClick={() =>
                        handleSelectChange("vectorStore", "Qdrant")
                      }
                    >
                      Qdrant
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        handleSelectChange("vectorStore", "Pinecone")
                      }
                    >
                      Pinecone
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        handleSelectChange("vectorStore", "Weaviate")
                      }
                    >
                      Weaviate
                    </Dropdown.Item>
                  </Dropdown.List>
                </Dropdown.Contents>
              </Dropdown>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                LLM Embedding Model<span className="text-red-500">*</span>
              </label>
              <Dropdown
                styles={{
                  root: "relative inline-block w-full",
                  button:
                    "w-full inline-flex items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-400 hover:bg-gray-50 transition",
                  contents:
                    "absolute left-0 z-50 mt-2 w-full min-w-44 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg",
                }}
              >
                <Dropdown.Button className="w-full">
                  <span className="text-left flex-1">{formData.llmModel}</span>
                </Dropdown.Button>
                <Dropdown.Contents>
                  <Dropdown.List>
                    <Dropdown.Item
                      onClick={() =>
                        handleSelectChange("llmModel", "text-embedding-oda-002")
                      }
                    >
                      text-embedding-oda-002
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        handleSelectChange("llmModel", "text-embedding-3-small")
                      }
                    >
                      text-embedding-3-small
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() =>
                        handleSelectChange("llmModel", "text-embedding-3-large")
                      }
                    >
                      text-embedding-3-large
                    </Dropdown.Item>
                  </Dropdown.List>
                </Dropdown.Contents>
              </Dropdown>
            </div>
          </div>

          <div className=" pt-6 mt-6">
            <Button
              text="Create"
              className="rounded-lg flex items-center justify-center bg-[#4F46E5] ml-auto text-white py-2 px-4"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default KnowledgeBase;
