import React from 'react';
import config from '../config';

interface DragLeft2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name DragLeft2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/drag-left2)
 * @see {@link https://clicons.dev/icon/drag-left2}
 */
const DragLeft2Icon = React.forwardRef<SVGSVGElement, DragLeft2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M8.5072 13.6528L10.4776 15.3722V6.50065C10.4776 5.67186 11.1509 5 11.9812 5C12.8111 5 13.4841 5.67107 13.4848 6.49935L13.4881 11.263L16.1297 11.6903C17.8347 11.9492 18.6873 12.0786 19.2878 12.4427C20.2797 13.0441 20.9983 14 20.9983 15.2657C20.9983 16.1841 20.7741 16.8002 20.2288 18.4556C19.8828 19.5059 19.7099 20.0311 19.4278 20.4469C18.9634 21.1313 18.2783 21.6311 17.4898 21.8605C17.0109 21.9999 16.4639 21.9999 15.3699 21.9999H14.4425C12.988 21.9999 12.2607 21.9999 11.6134 21.7298C11.4972 21.6814 11.3838 21.6267 11.2734 21.566C10.658 21.2278 10.1995 20.6566 9.28225 19.5142L6.31303 15.8158C5.85675 15.2474 5.8537 14.4341 6.30571 13.8622C6.84899 13.175 7.84689 13.08 8.5072 13.6528Z'
    }
  ],
  [
    'path',
    {
      d: 'M13.9224 9.5C15.1545 8.81764 15.9884 7.50601 15.9884 6C15.9884 3.79086 14.194 2 11.9805 2C9.76705 2 7.97266 3.79086 7.97266 6C7.97266 7.50601 8.80659 8.81764 10.0387 9.5'
    }
  ],
  [
    'path',
    {
      d: 'M7.8175 6.02289H3.00098M3.00098 6.02289C3.00098 6.49301 3.51523 6.71721 3.83702 7.01159L5.01717 8.01018M3.00098 6.02289C3.00098 5.55277 3.52331 5.29883 3.83702 5.00162L5.01717 3.99023'
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

DragLeft2Icon.displayName = 'DragLeft2Icon';
export default DragLeft2Icon;
