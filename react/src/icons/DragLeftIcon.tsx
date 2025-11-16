import React from 'react';
import config from '../config';

interface DragLeftIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DragLeftIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/drag-left)
 * @see {@link https://clicons.dev/icon/drag-left}
 */
const DragLeftIcon = React.forwardRef<SVGSVGElement, DragLeftIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M10.6821 8.48926C9.6671 7.87782 8.98828 6.76527 8.98828 5.49422C8.98828 3.56441 10.553 2 12.4833 2C14.4135 2 15.9783 3.56441 15.9783 5.49422C15.9783 6.76527 15.2994 7.87782 14.2845 8.48926'
    }
  ],
  [
    'path',
    {
      d: 'M10.553 21.9348L10.5784 21.3044C10.6032 20.6883 10.4414 20.0752 10.0986 19.56C8.75005 17.533 7.71953 16.3786 6.30717 14.4014C6.19531 14.2448 6.09068 14.0789 6.0466 13.8919C5.70602 12.4471 7.46581 10.5666 9.09583 12.7323L10.6871 14.3646L10.6871 6.32391C10.8981 4.6763 13.4908 4.34948 13.928 6.32389L13.928 10.0659C15.5452 9.91869 22.0819 11.044 20.8482 15.5308C20.7904 15.7411 20.7351 15.9558 20.678 16.1663C20.4702 16.933 19.962 18.0523 19.4727 19.0064C18.9286 20.0673 19.0718 21.566 18.9796 22.001'
    }
  ],
  [
    'path',
    {
      d: 'M8.71865 4.98853H2.99805M2.99805 4.98853C3.1371 5.4239 3.5156 5.68779 3.83946 5.98427L5.02718 6.98996M2.99805 4.98853C3.11123 4.54575 3.52373 4.25931 3.83946 3.95999L5.02718 2.94141'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

DragLeftIcon.displayName = 'DragLeftIcon';
export default DragLeftIcon;
