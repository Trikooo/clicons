import React from 'react';
import config from '../config';

interface JudgeIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name JudgeIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/judge)
 * @see {@link https://clicons.dev/icon/judge}
 */
const JudgeIcon = React.forwardRef<SVGSVGElement, JudgeIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M16.6582 13L19.4303 15.3806C20.0131 15.8811 20.3045 16.1313 20.5492 16.4136C20.9409 16.8655 21.2468 17.3808 21.4528 17.9356C21.5815 18.2821 21.658 18.6515 21.8109 19.3902C21.9648 20.1337 22 21.5 22 22M7.34236 13L4.57021 15.3806C3.98742 15.8811 3.69601 16.1313 3.45133 16.4136C3.05962 16.8655 2.75371 17.3808 2.54771 17.9356C2.41903 18.2821 2.34257 18.6515 2.18965 19.3902C2.03573 20.1337 2 21.5 2 22'
    }
  ],
  [
    'path',
    {
      d: 'M16.5 11C16.5 13.7615 14.4853 16 12 16C9.51472 16 7.5 13.7614 7.5 11M16.5 11C16.5 8.94231 15.7173 6.40776 14 6.40776C13.2173 6.40776 13 7.49994 12 7.49994C11 7.49994 10.7825 6.40771 10 6.40771C8.28254 6.40771 7.50001 8.94218 7.5 11M16.5 11V12C16.5 13.1046 17.3954 14 18.5 14C19.6046 14 20.5 13.1046 20.5 12C20.5 11.3276 20.1681 10.7326 19.6592 10.37C20.175 9.91208 20.5 9.24399 20.5 8.5C20.5 7.11929 19.3807 6 18 6C18 3.79086 15.5 2 12 2C8.5 2 6 3.79086 6 6C4.61929 6 3.5 7.11929 3.5 8.5C3.5 9.24399 3.82499 9.91208 4.34075 10.37C3.83187 10.7326 3.5 11.3276 3.5 12C3.5 13.1046 4.39543 14 5.5 14C6.60457 14 7.5 13.1046 7.5 12V11'
    }
  ],
  [
    'path',
    {
      d: 'M14.0291 16L15.168 19.3675C15.8775 21.4655 15.5443 22 13.243 22H10.757C8.45571 22 8.12254 21.4655 8.83205 19.3675L9.9709 16'
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

JudgeIcon.displayName = 'JudgeIcon';
export default JudgeIcon;
