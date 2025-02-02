// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { RuntimeOptimizationRecord } from '../../onnxruntime/fbs/runtime-optimization-record.js';

export class RuntimeOptimizationRecordContainerEntry {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;
  __init(i: number, bb: flatbuffers.ByteBuffer): RuntimeOptimizationRecordContainerEntry {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsRuntimeOptimizationRecordContainerEntry(
    bb: flatbuffers.ByteBuffer,
    obj?: RuntimeOptimizationRecordContainerEntry,
  ): RuntimeOptimizationRecordContainerEntry {
    return (obj || new RuntimeOptimizationRecordContainerEntry()).__init(
      bb.readInt32(bb.position()) + bb.position(),
      bb,
    );
  }

  static getSizePrefixedRootAsRuntimeOptimizationRecordContainerEntry(
    bb: flatbuffers.ByteBuffer,
    obj?: RuntimeOptimizationRecordContainerEntry,
  ): RuntimeOptimizationRecordContainerEntry {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new RuntimeOptimizationRecordContainerEntry()).__init(
      bb.readInt32(bb.position()) + bb.position(),
      bb,
    );
  }

  optimizerName(): string | null;
  optimizerName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
  optimizerName(optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
  }

  runtimeOptimizationRecords(index: number, obj?: RuntimeOptimizationRecord): RuntimeOptimizationRecord | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset
      ? (obj || new RuntimeOptimizationRecord()).__init(
          this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4),
          this.bb!,
        )
      : null;
  }

  runtimeOptimizationRecordsLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  static startRuntimeOptimizationRecordContainerEntry(builder: flatbuffers.Builder) {
    builder.startObject(2);
  }

  static addOptimizerName(builder: flatbuffers.Builder, optimizerNameOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, optimizerNameOffset, 0);
  }

  static addRuntimeOptimizationRecords(
    builder: flatbuffers.Builder,
    runtimeOptimizationRecordsOffset: flatbuffers.Offset,
  ) {
    builder.addFieldOffset(1, runtimeOptimizationRecordsOffset, 0);
  }

  static createRuntimeOptimizationRecordsVector(
    builder: flatbuffers.Builder,
    data: flatbuffers.Offset[],
  ): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]!);
    }
    return builder.endVector();
  }

  static startRuntimeOptimizationRecordsVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static endRuntimeOptimizationRecordContainerEntry(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    builder.requiredField(offset, 4); // optimizer_name
    return offset;
  }

  static createRuntimeOptimizationRecordContainerEntry(
    builder: flatbuffers.Builder,
    optimizerNameOffset: flatbuffers.Offset,
    runtimeOptimizationRecordsOffset: flatbuffers.Offset,
  ): flatbuffers.Offset {
    RuntimeOptimizationRecordContainerEntry.startRuntimeOptimizationRecordContainerEntry(builder);
    RuntimeOptimizationRecordContainerEntry.addOptimizerName(builder, optimizerNameOffset);
    RuntimeOptimizationRecordContainerEntry.addRuntimeOptimizationRecords(builder, runtimeOptimizationRecordsOffset);
    return RuntimeOptimizationRecordContainerEntry.endRuntimeOptimizationRecordContainerEntry(builder);
  }
}
