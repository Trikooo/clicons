import React from 'react';
import config from '../config';

interface AiFolder2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AiFolder2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/ai-folder2)
 * @see {@link https://clicons.dev/icon/ai-folder2}
 */
const AiFolder2Icon = React.forwardRef<SVGSVGElement, AiFolder2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M7 6.00085H16.75C18.8567 6.00085 19.91 6.00085 20.6667 6.50644C20.9943 6.72532 21.2755 7.00657 21.4944 7.33414C22 8.09081 22 9.14416 22 11.2509C22 14.7621 22 16.5176 21.1573 17.7788C20.975 18.0517 20.7666 18.3054 20.5355 18.5364M3.46447 18.5364C2 17.072 2 14.7149 2 10.0009V6.94512C2 5.12865 2 4.22041 2.38032 3.53891C2.65142 3.05312 3.05227 2.65227 3.53806 2.38117C4.21956 2.00085 5.1278 2.00085 6.94427 2.00085C8.10802 2.00085 8.6899 2.00085 9.19926 2.19186C10.3622 2.62797 10.8418 3.68443 11.3666 4.73398L12 6.00085'
    }
  ],
  [
    'path',
    {
      d: 'M10.4499 12.0009V13.9799M6.96289 15.5012H9.01487M14.986 15.5012H17.0379M14.986 18.4745H17.0379M6.96289 18.4745H9.01487M10.4499 20.0201V21.9991M13.4754 20.0201V21.9991M13.4646 12.0009V13.9799M10.0149 19.9684H13.986C14.5382 19.9684 14.986 19.5207 14.986 18.9684V14.9799C14.986 14.4276 14.5382 13.9799 13.986 13.9799H10.0149C9.46258 13.9799 9.01487 14.4276 9.01487 14.9799V18.9684C9.01487 19.5207 9.46258 19.9684 10.0149 19.9684Z'
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

AiFolder2Icon.displayName = 'AiFolder2Icon';
export default AiFolder2Icon;
